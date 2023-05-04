import * as fp from 'fingerpose'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

export const VolumeUpGesture = new fp.GestureDescription(PLAYER_CONSTANTS.VOLUME_UP)

VolumeUpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl)
VolumeUpGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0)
VolumeUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl)
VolumeUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0)
VolumeUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0)

for (const finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  VolumeUpGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
}
