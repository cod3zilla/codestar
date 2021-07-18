const nodemailer=require('nodemailer')

const sendForm= (req, res)=>{
    
        const {fullName,email,phone,message}=req.body 
        const output=`
        <p>you have new contact request</p>
        <h3>contact details</h3>
        <ul>
        <li>Name:${fullName}</li>
        <li>Email:${email}</li>
        <li>Phone:${phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>
        ` ;
        let transporter=nodemailer.createTransport({
          host:process.env.HOST,
          port:26,
          secure:false,
          auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
          },
          tls:{
            rejectUnauthorized:false
          }
        })
        let mailOptions={
          from:process.env.SENDER_EMAIL,
          to:process.env.RECEIVER_EMAIL,
          subject:'CodeStar Contact Request',
          text:'howdy',
          html:output
      
        }
        transporter.sendMail(mailOptions,(err,info)=>{
          if(err){
            return console.log(err)
          }
          console.log('message sent %s',info.messageId)
          console.log('preview URL: %s', nodemailer.getTestMessageUrl(info))
          req.flash('success','form submitted')
          res.redirect('/')
        })
        req.session.sessionFlash = {
          type: 'success',
          message: 'thank you for contact us. we will get back to you ASAP!!.'
      }
      res.redirect(301, '/#here');
       }

       const sendForm1= (req, res)=>{
    
        const {fullName,email,phone,message}=req.body 
        const output=`
        <p>you have new contact request</p>
        <h3>contact details</h3>
        <ul>
        <li>Name:${fullName}</li>
        <li>Email:${email}</li>
        <li>Phone:${phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>
        ` ;
        let transporter=nodemailer.createTransport({
          host:process.env.HOST,
          port:26,
          secure:false,
          auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
          },
          tls:{
            rejectUnauthorized:false
          }
        })
        let mailOptions={
          from:process.env.SENDER_EMAIL,
          to:process.env.RECEIVER_EMAIL,
          subject:'CodeStar Contact Request',
          text:'howdy',
          html:output
      
        }
        transporter.sendMail(mailOptions,(err,info)=>{
          if(err){
            return console.log(err)
          }
          console.log('message sent %s',info.messageId)
          console.log('preview URL: %s', nodemailer.getTestMessageUrl(info))
          req.flash('success','form submitted')
          res.redirect('/')
        })
        req.session.sessionFlash = {
          type: 'success',
          message: 'thank you for contact us. we will get back to you ASAP!!.'
      }
      res.redirect(301, '/contact');
        }


    //register page form controller 

    const registerForm=(req, res)=>{
        
        const {firstName,lastName,age,sex,city,province,email,phone,connection}=req.body 
        const output=`
        <p>you have new contact request</p>
        <h3>contact details</h3>
        <ul>
        <li>First Name:${firstName}</li>
        <li>Last Name:${lastName}</li>
        <li>Age:${age}</li>
        <li>Sex:${sex}</li>
        <li>City:${city}</li>
        <li>Province:${province}</li>
        <li>Email:${email}</li>
        <li>Phone:${phone}</li>
        <li>Connection:${connection}</li>
        </ul>
          
        ` ;
        let transporter=nodemailer.createTransport({
          host:process.env.HOST,
          port:26,
          secure:false,
          auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
          },
          tls:{
            rejectUnauthorized:false
          }
        })
        let mailOptions={
          from:process.env.SENDER_EMAIL,
          to:process.env.RECEIVER_EMAIL,
          subject:'CodeStar Contact Request',
          text:'howdy',
          html:output
      
        }
        transporter.sendMail(mailOptions,(err,info)=>{
          if(err){
            return console.log(err)
          } 
          console.log('message sent %s',info.messageId)
          console.log('preview URL: %s', nodemailer.getTestMessageUrl(info))
          
        }) 
        
        req.session.sessionFlash = {
          type: 'success',
          message: 'thank you for Register your seat with us.'
      }
      res.redirect(301, '/register');
       }
    

    ////course student logic
    const studentId=(req, res)=>{
      const {student}=req.body
      const studentRoll='12345'
      
      if(studentRoll==student){
        
        res.send('Hurrayy you made it. Content will be uploaded soon')
      }else{
      
        req.session.sessionFlash = {
          type: 'danger',
          message: 'enter your correct student-ID'
      }
      res.redirect(301, '/courses');
        
      }
    }   
    module.exports={studentId,sendForm, sendForm1,registerForm}
    