import * as fp from 'fingerpose'

import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

export const VolumeDownGesture = new fp.GestureDescription(PLAYER_CONSTANTS.VOLUME_DOWN)

VolumeDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl)
VolumeDownGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 1.0)
VolumeDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl)
VolumeDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 1.0)
VolumeDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0)

for (const finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  VolumeDownGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
}
