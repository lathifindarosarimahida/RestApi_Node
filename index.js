const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const cors = require ("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


//=========================================== NO 1 ===========================================
//*************** ENDPOINT KUBUS ***************                                            
app.post("/kubus", (req,res) => {                                                           
    let rusuk = Number(req.body.rusuk)                                                      
                                                                                            
    let luas_permukaan = 6 * (rusuk**2)                                                     
    let volume = rusuk**3                                                                   

    let response ={
        rusuk: rusuk,
        luas_permukaan: luas_permukaan,
        volume: volume
    }
    res.json(response)
})

//*************** ENDPOINT BALOK ***************
app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas_permukaan = (2*panjang*lebar) + (2*panjang*tinggi) + (2*lebar*tinggi)
    let volume = panjang * lebar * tinggi

    let response ={
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }
    res.json(response)
})

//*************** ENDPOINT TABUNG ***************
app.post("/tabung", (req,res) => {
    let jari_jari = Number(req.body.jari_jari)
    let tinggi = Number(req.body.tinggi)
    let phi = 3.14

    let luas_permukaan = 2 * phi * jari_jari * (jari_jari + tinggi)
    let volume = phi * (jari_jari**2) * tinggi

    let response ={
        jari_jari: jari_jari,
        tinggi: tinggi,
        phi: phi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }
    res.json(response)
})

//*************** ENDPOINT KERUCUT ***************
app.post("/kerucut", (req,res) => {
    let jari_jari = Number(req.body.jari_jari)
    let tinggi = Number(req.body.tinggi)
    let phi = 3.14

    let luas_permukaan = phi * jari_jari * (jari_jari +(Math.sqrt((jari_jari**2) + (tinggi**2))))
    let volume = (1/3) * phi * (jari_jari**2) * tinggi

    let response ={
        jari_jari: jari_jari,
        tinggi: tinggi,
        phi: phi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }
    res.json(response)
})


//=========================================== NO 2 ===========================================
//*************** ENDPOINT CELCIUS ***************
app.get("/convert/celcius/:suhu", (req,res)=>{
    let suhu = req.params.suhu

    let reamur = (4/5) * suhu
    let fahrenheit = ((9/5)* suhu) + 32
    let kelvin = Number(suhu) + 273


    let response = {
        celcius: suhu,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    
     res.json(response)
})

//*************** ENDPOINT REAMUR ***************
app.get("/convert/reamur/:suhu", (req,res)=>{
    let suhu =req.params.suhu

    let celcius = (5/4) * suhu
    let fahrenheit = ((9/4) * suhu) + 32
    let kelvin = ((5/4) * suhu) + 273


    let response = {
        reamur: suhu,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    
     res.json(response)
})

//*************** ENDPOINT KELVIN ***************
app.get("/convert/kelvin/:suhu", (req,res)=>{
    let suhu = req.params.suhu

    let celcius = suhu - 273
    let fahrenheit = (9/5) * (suhu - 273) + 32
    let reamur = (4/5) * (suhu - 273)


    let response = {
        kelvin: suhu,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }
    
     res.json(response)
})

//*************** ENDPOINT FAHRENHEIT ***************
app.get("/convert/fahrenheit/:suhu", (req,res)=>{
    let suhu = req.params.suhu

    let celcius = (5/9) * (suhu - 32)
    let reamur = (4/9) * (suhu - 32)
    let kelvin = (5/9) * (suhu - 32) + 273


    let response = {
        fahrenheit: suhu,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    
     res.json(response)
})

//=========================================== NO 3 ===========================================
//*************** ENDPOINT DESIMAL ***************
app.post('/desimal',(req,res)=>{
    var bilangan        = parseInt(req.body.bilangan)
    let heksadesimal    = (bilangan).toString(16)
    let oktal           = (bilangan).toString(8)  
    let biner           = (bilangan).toString(2)

    res.json({
        Desimal         : bilangan,
        Heksadesimal    : heksadesimal,
        Oktal           : oktal,
        Biner           : biner
    })
})

//*************** ENDPOINT BINER ***************
app.post('/biner',(req,res)=>{
    var bilangan        = parseInt(req.body.bilangan)
    let desimal         = parseInt(bilangan, 2)
    let heksadesimal    = (desimal).toString(16)
    let oktal           = (desimal).toString(8)      

    res.json({
        Biner           : bilangan,
        Desimal         : desimal,
        Heksadesimal    : heksadesimal,
        Oktal           : oktal,        
    })
})

//*************** ENDPOINT OKTAL ***************
app.post('/oktal',(req,res)=>{
    var bilangan        = parseInt(req.body.bilangan)
    let desimal         = parseInt(bilangan, 8)
    let heksadesimal    = (desimal).toString(16)
    let biner           = (desimal).toString(2)      

    res.json({
        Oktal           : bilangan,
        Desimal         : desimal,
        Heksadesimal    : heksadesimal,
        Biner           : biner        
    })
})

//*************** ENDPOINT HEKSADESIMAL ***************
app.post('/heksadesimal',(req,res)=>{
    var bilangan        = parseInt(req.body.bilangan)
    let desimal         = parseInt(bilangan, 16)
    let oktal           = (desimal).toString(8)
    let biner           = (desimal).toString(2)      
    res.json({
        Heksadesimal    : bilangan,
        Desimal         : desimal,
        Oktal           : oktal,
        Biner           : biner        
    })
})


//=========================================== NO 4 ===========================================
app.post('/hitung_bmi', (req,res) => {
    let tinggi = req.body.tinggi //dalam meter
    let berat = req.body.berat //dalam kg

    let BMI = berat / (tinggi**2)

    if (BMI < 18.5 ) {
        res.json({
            Tinggi  : tinggi,
            Berat   : berat,
            BMI     : BMI,
            Kondisi : "Kekurangan Berat Badan"
        })
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        res.json({
            Tinggi  : tinggi,
            Berat   : berat,
            BMI     : BMI,
            Kondisi : "Normal (Ideal)"
        })
    }
    else if (BMI >= 25.0 && BMI <= 29.9) {
        res.json({
            Tinggi  : tinggi,
            Berat   : berat,
            BMI     : BMI,
            Kondisi : "Kelebihan Berat Badan"
        })
    }
    else {
        res.json({
            Tinggi  : tinggi,
            Berat   : berat,
            BMI     : BMI,
            Kondisi : "Kegemukan (Obesitas)"
        })
    }
})





//=====================================================
app.listen(8000,() => {
    console.log("Start on port 8000, Semangatt!!");
});