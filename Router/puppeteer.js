const puppeteer=require("puppeteer")
const pagemap=new Map()
module.exports.verification=async(req,res)=>{
    const browser = await puppeteer.launch({headless:false});
      try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto('https://foscos.fssai.gov.in/');
        await page.waitForSelector("#governmentAgencies1")
        const icon=await page.click("#governmentAgencies1")

        
        await page.screenshot({path:'example1.png'})
        pagemap.set("page",page)
        return res.status(200).send("sent")
      } catch (error) {
        return res.send("failed")
        
      }
}