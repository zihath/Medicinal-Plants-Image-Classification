from fastapi import FastAPI , File , UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import io
from fastapi.responses import JSONResponse

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers= ["*"],
)

model = tf.keras.models.load_model(r"C:\git repos\new leaves\saved_model\tf_trained_model.h5")
class_names = ['Aloevera', 'Amla', 'Amruthaballi', 'Arali', 'Astma_weed', 'Badipala', 'Balloon_Vine', 'Bamboo', 'Beans', 'Betel', 'Bhrami', 'Bringaraja', 'Caricature', 'Castor', 'Catharanthus', 'Chakte', 'Chilly', 'Citron lime (herelikai)', 'Coffee', 'Common rue(naagdalli)', 'Coriender', 'Curry', 'Doddpathre', 'Ekka', 'Eucalyptus', 'Ganigale', 'Ganike', 'Gasagase', 'Ginger', 'Globe Amarnath', 'Guava', 'Henna', 'Hibiscus', 'Honge', 'Insulin', 'Jackfruit', 'Jasmine', 'Kambajala', 'Kasambruga', 'Lemon', 'Malabar_Nut', 'Malabar_Spinach', 'Mango', 'Marigold', 'ashoka', 'camphor', 'kamakasturi']

def reshape_image(contents):
    img_width, img_height = 299, 299
    img = image.load_img(io.BytesIO(contents), target_size=(img_width, img_height))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array

@app.get("/ping")

async def ping():
    return "HELLO"


@app.post("/predict")
async def Predict(file : UploadFile = File(...)):
    contents = await file.read()
    img_array = reshape_image(contents)
    prediction_array = model.predict(img_array)
    predicted_label = np.argmax(prediction_array)
    predicted_class = class_names[predicted_label]
    return JSONResponse(content= predicted_class)
    





if __name__ == "__main__":
    uvicorn.run(app , host = 'localhost' , port = 5000)