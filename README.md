# Plant-Image-Classification
Classification or Identification of medicinal plant leaves using deep convolution neural networks.

## Overview
Plant leaf classification is a system which is able to classify 47 different species of plants on the basis of the leaves using deep learning techniques.
## Dataset description
The original [dataset](https://www.kaggle.com/datasets/aryashah2k/indian-medicinal-leaves-dataset) contains 80 plant species ,  it is so clumsy , so i done manuall data cleaning and picked 47 class and split them into [train dataset](https://drive.google.com/drive/folders/1OjDoF7BuDFnJNbX7WZB9jAdZ7ljfNupH?usp=drive_link) and [validation dataset](https://drive.google.com/drive/folders/1_W3QcWzqtUYmQ9uf4p7hd6dqiNxqAisg?usp=drive_link) . 
## Model
By using transfer learning technique , we used the pre-trained Inception V3 model and fine-tune it for our task.
the model was trained for 30-40 epoched with varying the hyper-parameters. 
## Model Evalution
Our Model gained the highest accuracy of 99% in training dataset and test accuracy of 89% . Various evaluation metrics are done in the main code file.
## API
The API was developed using the FAST API using saved pre-trained model.
## Web intergface 
The web- interface was devloped using React , CSS , HTML .
