Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

cam=document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'

    })
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UOLKc2I0N/model.json",modelLoaded)

function modelLoaded(){
    console.log(modelLoaded)

}
function result(){
    img=document.getElementById("capture_image")
    classifier.classify(img,getresult)
   
}
function getresult(error,results)
{
if(error){
    console.error(error)

}   
else{
    document.getElementById("result_object_name").innerHTML=results[0].label
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
} 
}