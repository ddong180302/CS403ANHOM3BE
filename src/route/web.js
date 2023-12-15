import express from "express";
import hoKhauController from '../controllers/hoKhauController';
import nhanKhauController from '../controllers/nhanKhauController';

const router = express.Router();

let initWebRoutes = (app) => {

    //Personal
    router.get('/api/v1/hokhau', hoKhauController.getAllHoKhau);
    router.get('/api/v1/nhankhau', nhanKhauController.getAllNhanKhau);
    router.post('/api/v1/nhankhau', nhanKhauController.createNhanKhau);
    router.put('/api/v1/nhankhau', nhanKhauController.updateNhanKhau);
    router.delete('/api/v1/nhankhau/:MaSoDinhDanh', nhanKhauController.deleteNhanKhau);
    // router.get('/api/v1/getcountpersonal', personalController.getCountPersonal);
    // router.post('/api/v1/personal', personalController.createPersonal);

    // //users
    // router.get('/api/v1/users', usresController.getAllUsers);
    // router.post('/api/v1/users', usresController.createAUsers);
    // router.get('/api/v1/getcountuser', personalController.getCountUser);

    // //employment
    // router.get('/api/v1/employment/:id', personalController.getEmploymentById);
    // router.get('/api/v1/employment', employmentController.getAllEmployment);

    // //benefit plans
    // router.get('/api/v1/benefit', personalController.getAllBenefit);
    // router.get('/api/v1/benefitplans/:id', personalController.getBenefit_PlansById);
    // router.get('/api/v1/benefitplan', benefitPlanController.getAllBenefitPlan);
    // router.get('/api/v1/getcountbenefitplan', personalController.getCountBenefitPlan);

    // //jobhistory
    // router.get('/api/v1/jobhistory/:id', personalController.getJobhistoryById);
    // router.get('/api/v1/jobhistory', jobHistoryController.getAllJobHistory);

    // //payrates
    // router.get('/api/v1/payrate/:id', personalController.getPayrateById);
    // router.get('/api/v1/payrate', payRatesController.getAllPayrate);

    // //emergency contacts
    // router.get('/api/v1/emergency_contacts/:id', personalController.getEmergency_ContactsById);
    // router.get('/api/v1/contacts', emergencyContactsController.getAllEmergency);

    return app.use("/", router);
}


module.exports = initWebRoutes;
