const express=require('express')
const nodemailer=require('nodemailer')
const router=express.Router()
const { sendForm,sendForm1, registerForm, studentId } = require('../controllers/send.controllers')

router.get('/',(req, res)=>{
    res.render('home')
})

router.post('/', sendForm)

router.get('/contact',(req, res)=>{
    res.render('contact')  
  })
router.post('/contact',sendForm1) 


router.get('/syllabus',(req, res)=>{
  res.render('syllabus')
})

router.get('/courses',(req, res)=>{
  res.render('courses')
})
router.post('/courses',studentId)
router.get('/about',(req, res)=>{
  res.render('about')
})


router.get('/register',(req, res)=>{
  res.render('register')
})

router.post('/register',registerForm) 

module.exports=router
