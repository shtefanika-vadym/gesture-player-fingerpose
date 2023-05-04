import type { MutableRefObject } from 'react'
import { useEffect, useRef } from 'react'
import Webcam from 'react-webcam'

import type { AnnotatedPrediction, HandPose } from '@tensorflow-models/handpose'
import { load } from '@tensorflow-models/handpose'
import * as fp from 'fingerpose'

import video from 'features/player/assets/video.mp4'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'
import type { PLAYER_GESTURE_TYPE } from 'features/player/types/player-gesture.type'
import { DecreaseGesture } from 'features/player/utils/decrease'
import { FullscreenGesture } from 'features/player/utils/fullscreen'
import { IncreaseGesture } from 'features/player/utils/increase'
import { PauseGesture } from 'features/player/utils/pause'
import { PlayGesture } from 'features/player/utils/play'
import { VolumeDownGesture } from 'features/player/utils/volume-down'
import { VolumeUpGesture } from 'features/player/utils/volume-up'

import styles from './player-pose-detection.module.scss'

import '@tensorflow/tfjs'

export const PlayerPoseDetection = () => {
  const webcamRef: MutableRefObject<any> = useRef(null)
  const videoRef: MutableRefObject<any> = useRef<HTMLVideoElement>(null)

  useEffect((): void => {
    ;(async (): Promise<void> => {
      const pose: HandPose = await load()
      setInterval((): void => {
        detect(pose)
      }, 100)
    })()
  }, [])

  const detect = async (pose: HandPose): Promise<void> => {
    if (webcamRef.current?.video?.readyState === 4) {
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight
      const hand: AnnotatedPrediction[] = await pose.estimateHands(video)

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          PlayGesture,
          PauseGesture,
          IncreaseGesture,
          DecreaseGesture,
          VolumeUpGesture,
          VolumeDownGesture,
          FullscreenGesture,
        ])
        const gesture = await GE.estimate(hand.at(0).landmarks, 8)
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map((prediction) => prediction.score)
          const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence))
          const gestureName: PLAYER_GESTURE_TYPE = gesture.gestures.at(maxConfidence).name
          handleManagePlayer(gestureName)
          console.info(gestureName)
        }
      }
    }
  }

  const handleManagePlayer = (gesture: PLAYER_GESTURE_TYPE): void => {
    const video: HTMLVideoElement = videoRef.current
    switch (gesture) {
      case PLAYER_CONSTANTS.PLAY:
        video.play()
        return
      case PLAYER_CONSTANTS.PAUSE:
        video.pause()
        return
      case PLAYER_CONSTANTS.VOLUME_UP:
        if (video.volume <= 0.9) video.volume += 0.1
        else video.volume = 1
        return
      case PLAYER_CONSTANTS.VOLUME_DOWN:
        if (video.volume >= 0.1) video.volume -= 0.1
        else video.volume = 0
        return
      case PLAYER_CONSTANTS.INCREASE:
        videoRef.current.currentTime -= 1
        return
      case PLAYER_CONSTANTS.DECREASE:
        videoRef.current.currentTime += 1
        return
      case PLAYER_CONSTANTS.FULL_SCREEN:
        if (document.fullscreenElement) document.exitFullscreen()
        else videoRef.current.requestFullscreen()
        return
      default:
        return
    }
  }

  return (
    <div className={styles.parent}>
      <Webcam ref={webcamRef} className={styles.parentWebcam} />
      <video ref={videoRef} className={styles.parentVideo} controls src={video} />
    </div>
  )
}
