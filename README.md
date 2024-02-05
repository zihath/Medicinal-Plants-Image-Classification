# Plant Image Classification

## Overview

Plant Image Classification is a sophisticated system designed for the accurate classification of 47 distinct plant species based on their leaves, leveraging advanced deep learning techniques.

## Dataset Description

The original [dataset](https://www.kaggle.com/datasets/aryashah2k/indian-medicinal-leaves-dataset) encompassed 80 plant species. Through meticulous manual data cleaning, the dataset was refined to focus on 47 classes. This curated dataset was then meticulously split into a [training dataset](https://drive.google.com/drive/folders/1OjDoF7BuDFnJNbX7WZB9jAdZ7ljfNupH?usp=drive_link) and a [validation dataset](https://drive.google.com/drive/folders/1_W3QcWzqtUYmQ9uf4p7hd6dqiNxqAisg?usp=drive_link).

## Model

The project employs a cutting-edge transfer learning approach, utilizing the pre-trained Inception V3 model, which is fine-tuned for the specific task at hand. The model undergoes rigorous training for 30-40 epochs, with careful consideration of various hyperparameters.

## Model Evaluation

The trained model boasts an outstanding accuracy of 99% on the training dataset and an impressive test accuracy of 89%. A comprehensive set of evaluation metrics is available in the main code file, ensuring robust assessment and validation.
## Sample Predictions
![Screenshot 2023-12-30 221212](https://github.com/zihath/Medicinal-Plants-Image-Classification/assets/133570794/c286ad4a-9425-4807-9189-67bfbf055efd)
## API

For seamless integration and interaction, a RESTful API has been meticulously developed using the FAST API framework. The API incorporates the use of a saved pre-trained model, providing a reliable interface for external applications.

## Web Interface

To enhance user interaction and accessibility, a well-crafted web interface has been implemented. Leveraging React, CSS, and HTML, the interface offers an intuitive and user-friendly experience.

Feel free to tailor the content further based on your project's specifics, and best of luck with your Plant Image Classification project!

