import type { MutableRefObject } from 'react'
import { useEffect, useRef } from 'react'
import Webcam from 'react-webcam'

import type { AnnotatedPrediction, HandPose } from '@tensorflow-models/handpose'
import { load } from '@tensorflow-models/handpose'
import * as fp from 'fingerpose'

import '@tensorflow/tfjs'

import styles from './player-pose-detection.module.scss'

export const PlayerPoseDetection = () => {
  const webcamRef: MutableRefObject<any> = useRef(null)

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
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
        ])
        const gesture = await GE.estimate(hand.at(0).landmarks, 8)
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map((prediction) => prediction.score)
          const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence))
          console.info(gesture.gestures[maxConfidence].name)
        }
      }
    }
  }

  return <Webcam ref={webcamRef} className={styles.parent} />
}
