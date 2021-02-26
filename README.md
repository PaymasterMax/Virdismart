# Virdismart
Waste recycling company website.
The smart bin, an invention by virdismart is a bin built on using adruino technologies and raspberry pi, with software aid from python alongside react and mongo technologies.

## Functioning of the bin
The bin allows only authorized users to use the bin.
A user has to get their QR code from the virdis app and scan in on the bin QR-Code scanner. 
Once verified, the bin automatically opens ready for the user to drop the waste disposal.
Once done, the bin closes automatically and then and does image recognition to determine which kind of waste the user dropped.
Based on the output of the model, the bin awards the users with cashable points. 
If the user dropped something different it will deduct the user's points.
