# Weapon Detection System YOLOv8
### Interview Explainer & Q&A

> A compact cheat sheet for explaining the project clearly in interviews.

---

## 1. One-Line Summary

> "A real-time weapon-detection system that uses a custom-trained YOLOv8 model to analyze webcam frames, highlight detected objects with bounding boxes, and trigger an audible plus voice warning when a weapon is found."

---

## 2. The 30-Second Pitch

> "This project turns a YOLOv8 detector into a practical webcam-based safety tool. It takes live video from the camera, runs inference frame by frame, and draws red bounding boxes with confidence scores around detected objects. When a weapon is detected, the app immediately plays a beep and speaks a warning using text-to-speech. I trained the detector on a custom labeled dataset and exported the final model to ONNX for lightweight inference. The production workflow is described as FastAPI-based."

---

## 3. The Architecture (2-Minute Version)

**Inference Pipeline**
- The app opens a webcam stream with OpenCV and reads frames continuously.
- Each frame is passed into a YOLOv8 detection model loaded from `best.onnx`.
- Detected boxes are filtered by confidence threshold before being drawn on the frame.
- The overlay shows class labels and confidence values directly on the video feed.

**Alerting Layer**
- A beep is played through `winsound` as soon as a valid weapon detection appears.
- `pyttsx3` speaks a warning message in a separate thread so the camera loop stays responsive.
- A short cooldown prevents repeated alerts from firing too rapidly.

**Training and Export**
- The detector was trained on a custom weapon dataset with multiple classes such as pistol, knife, smartphone, billete, tarjeta, and monedero.
- Training output was exported from YOLOv8 to ONNX for local inference.
- The project keeps the model and dataset inside the repository for easy reproduction.

**Production Notes**
- The production-facing workflow is described as FastAPI-based, while the local demo is the webcam app.
- The runtime is optimized for local detection, so inference stays lightweight and immediate.

---

## 4. Likely Interview Questions & Answers

### Q: What problem does this project solve?
> "It helps detect dangerous objects in real time from a camera feed and gives an immediate visual and audio warning, which is useful for safety monitoring."

### Q: How does the detection work?
> "The webcam frame is sent into a YOLOv8 model. The model returns bounding boxes, class IDs, and confidence scores, and the app only shows predictions above the chosen threshold."

### Q: Why export to ONNX?
> "ONNX makes the model easier to deploy for lightweight inference and keeps the runtime portable across environments."

### Q: What happens when a weapon is detected?
> "The system draws a red bounding box, plays a beep, and speaks a warning message so the detection is both visible and audible."

### Q: How did you prepare the model?
> "I trained the detector on a custom labeled dataset with weapon and object classes, then exported the final model for inference."

### Q: What would you improve next?
> "I would add a proper API endpoint for remote monitoring, store detection events in a database, and add event snapshots or video clips for audit logs."

---

## 5. Key Terms to Drop Naturally

`YOLOv8`, `real-time detection`, `webcam inference`, `confidence threshold`, `bounding boxes`, `ONNX export`, `OpenCV`, `voice alert`, `beep warning`, `custom labeled dataset`

---

## 6. Tech Stack Summary

| Layer | Technologies |
|---|---|
| **Computer Vision** | YOLOv8, OpenCV, Ultralytics |
| **Inference** | ONNX |
| **Alerts** | winsound, pyttsx3, threading |
| **Runtime** | Python |
| **Production Flow** | FastAPI |
