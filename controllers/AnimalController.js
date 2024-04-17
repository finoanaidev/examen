// const Animal = require('../models/Animal')

// const index = (req, res, next) => {
//     Animal.find()
//     .then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: "An error Occured!"
//         })
//     })
// }

// const show = (req, res, next) => {
//     let animalID = req.body.animalID
//     Animal.findById(animalID)
//     .then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error Accured!'
//         })
//     })
// }

// //ajouter nouveau animal
// const store = (req, res, next) => {
//     let animal = new Animal({
//         nom: req.body.nom,
//         type: req.body.type,
//         couleur: req.body.couleur
//     })
//     if(req.files){
//         req.file.forEach(function(files, index, arr) {
//             path = path + files.path + ','
//         })
//         path = path.substring(0, path.lastIndexOf(","))
//         animal.image = path
//     }
//     animal.save()
//     .then(response => {
//         res.json({
//             message: 'Animal Added Succefully'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'An error Occured!'
//         })
//     })
// }
// //modifier un animal
// const update = (req, res, next) =>{
//     let animalID = req.body.animalID

//     let updateData = {
//         nom: req.body.nom,
//         type: req.body.type,
//         couleur: req.body.couleur
//     }

//     Animal.findByIdAndUpdate(animalID, {$set: updateData})
//     .then(() => {
//         res.json({
//             message: 'Animal modifier successivement!'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'Erreur lors de modification'
//         })
//     })
// }

// //supprimr animal
// const destroy = (req, res, next) => {
//     let animalID = req.body.animalID
//     Animal.findByIdAndDelete(animalID)
//     .then(() => {
//         res.json({
//             message: 'Suppression d\'un animal reussi'
//         })
//     })
//     .catch(error => {
//         res.json({
//             message: 'Erreur'
//         })
//     })
// }

// module.exports = {
//     index,show, store, update, destroy
// }

const Animal = require('../models/Animal')

const index = (req, res, next) => {
    Animal.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error Occured!"
        })
    })
}

const show = (req, res, next) => {
    let animalID = req.body.animalID
    Animal.findById(animalID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Accured!'
        })
    })
}

//ajouter nouveau animal
const store = (req, res, next) => {
    let animal = new Animal({
        nom: req.body.nom,
        type: req.body.type,
        couleur: req.body.couleur
    })
    if(req.files){
        req.file.forEach(function(files, index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        animal.image = path
    }
    animal.save()
    .then(response => {
        res.json({
            message: 'Animal Added Succefully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}
//modifier un animal
const update = (req, res, next) =>{
    let animalID = req.body.animalID

    let updateData = {
        nom: req.body.nom,
        type: req.body.type,
        couleur: req.body.couleur
    }

    Animal.findByIdAndUpdate(animalID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Animal modifier successivement!'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erreur lors de modification'
        })
    })
}

//supprimr animal
const destroy = (req, res, next) => {
    let animalID = req.body.animalID
    Animal.findByIdAndDelete(animalID)
    .then(() => {
        res.json({
            message: 'Suppression d\'un animal reussi'
        })
    })
    .catch(error => {
        res.json({
            message: 'Erreur'
        })
    })
}

module.exports = {
    index,show, store, update, destroy
}