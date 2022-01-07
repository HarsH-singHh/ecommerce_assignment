const express = require("express");
const mongoose = require("mongoose");
const app  = express();

const ItemModel = require("./models/Ecomm");

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecomm");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);


// Used to insert data in database
// var itemsArray = [

//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16471940/2021/12/12/7e55bb47-ec7d-4a43-849e-f2f233645b841639302479078HELLCATBoysNavyBluePrintedHoodedSweatshirt1.jpg",
//     title : "HELLCAT",
//     desc : "Boys Printed Sweatshirt",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14161748/2021/6/21/4e225deb-dca8-416b-a042-dfa64ef4da371624270247350-MANZON-Girls-Jeans-3571624270246813-1.jpg",
//     title : "MANZON", 
//     desc : "Girls Pack of 3 Cotton Jeans",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15238122/2021/8/24/d60e1f33-1e40-4df1-8378-1837c0e1082a1629785346782BONKIDSBoysMustardYellowPrintedPocketsSlimFitT-shirt1.jpg",
//     title : "BONKIDS",
//     desc : "Boys Spiderman Printed Slim Fit T-shirt",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15868728/2021/11/3/3a02f7b8-12a7-4ca4-9548-ecc551229da71635948029232RedTapeKidsWhiteGreenColoulourblockedWalkingShoes1.jpg",
//     title : "Red Tape",
//     desc : "Colorblocked Walking Shoes",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15754758/2021/10/6/d1595efb-23fd-4091-9fa1-77a2d15d8f641633523612127CutiekinsGirlsBlack1.jpg",
//     title : "Cutiekins",
//     desc : "Girls Sweatshirt With Joggers",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16276104/2021/11/27/2b5a1de6-e6c7-4709-8a21-31b2c0a91bd91638009421277BONKIDSBoysRedPrintedHoodedSweatshirt1.jpg",
//     title : "BONKIDS",
//     desc : "Mickey Boys Printed Sweatshirt",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15698382/2021/10/1/ee7c24b2-ebd8-4fc7-84df-1b29e0918dbc1633062114177Hoodie1.jpg",
//     title : "H&M",
//     desc : "Boys Hoodie",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15355036/2021/9/22/503e35d7-7346-44cd-b5f2-f91cd35dadfc1632285132103NohVoh-SASSAFRASKids2.jpg",
//     title : "Noh.Voh - SASSAFRAS Kids",
//     desc : "Girls Zip Detail Treggings",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15868738/2021/10/19/f082ecca-c930-48e4-b4ff-5a9e80d76a181634658534151SportsShoes1.jpg",
//     title : "Red Tape",
//     desc : "Unisex Kids Walking Shoes",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15583400/2021/9/23/85e524fe-6e00-467e-82bf-3049313b83b01632398853877LilTomatoesBoysLimeGreenPrintedHoodedSweatshirt1.jpg",
//     title : "Lil Tomatoes",
//     desc : "Boys Printed Sweatshirt",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14973318/2021/7/29/bb71e4b6-1349-4e12-9bfc-c095d212872c1627559296422BonOrganikBoysGreyAppliqueT-shirt1.jpg",
//     title : "BonOrganik",
//     desc : "Boys Marvel Printed T-shirt",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     {
//     imageURL : "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16414384/2021/12/7/ac51a7bb-4a02-418a-be57-558652c2ae981638885486118RedTapeUnisexKidsGreyFloralColourblockedPufferJacketwithPatc1.jpg",
//     title : "Red Tape",
//     desc : "Kids Hooded Padded Jacket",
//     quantity : 0,
//     cartStatus : false
//     },
    
//     ]
    



app.get("/", async(req, res) =>{

    try{
        // Used to insert data in database
        //await ItemModel.create(itemsArray)

        res.send("inserted data");

    } catch(error){
        res.send(error);
    }

});

app.get("/read", async (req, res)=>{

    
    ItemModel.find({}, (err, result)=>{
        if (err) {
            res.send(err);
        }

        res.send(result);
    });

});

app.put("/update", async (req, res)=>{

    const newQuant = req.body.newQuant;
    const id = req.body.id;
    let status = req.body.status;    

    try{
        await ItemModel.findById(id, (err, updatedItem)=>{
            oldQuant=parseInt(updatedItem.quantity)
            finalQuant = oldQuant + parseInt(newQuant)
            if (finalQuant<0 || status===false){
                finalQuant = 0
            }

            if (finalQuant===0){
                status=0
            }

            updatedItem.cartStatus = status,
            updatedItem.quantity = finalQuant
            updatedItem.save();
            res.send("updated")

        });

    }catch(err){
        console.log(err);
    }

});


app.listen(3001, () => {
    console.log("Server running on port 3001...");
});