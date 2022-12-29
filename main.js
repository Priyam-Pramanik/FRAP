Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src=" '+data_uri+'"/>';
    });

}

console.log('ml5version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/71A_zmLUc/', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');

}

function check(){
    img = document.getElementById('captured_img').value;
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(Error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
