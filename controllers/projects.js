const Project = require('../models/project');

function projectsIndex(req, res, next) {
  Project
    .find()
    .exec()
    .then(projects => res.json(projects))
    .catch(next);
}

// function projectsCreate(req, res, next) {
//
//   // if(req.file) req.body.image = req.file.filename;
//   req.body.createdBy = req.currentUser;
//
//   Project
//     .create(req.body)
//     .then(project => res.status(201).json(project))
//     .catch(next);
// }

function projectsShow(req, res, next) {
  Project
    .findById(req.params.id)
    .exec()
    .then((project) => {
      if(!project) return res.notFound();
      res.json(project);
    })
    .catch(next);
}

// function projectsUpdate(req, res, next) {
//
//   if(req.file) req.body.image = req.file.filename;
//
//   Project
//     .findById(req.params.id)
//     .exec()
//     .then((project) => {
//       if(!project) return res.notFound();
//
//       project = Object.assign(project, req.body);
//       return project.save();
//     })
//     .then(project => res.json(project))
//     .catch(next);
// }
//
// function projectsDelete(req, res, next) {
//   Project
//     .findById(req.params.id)
//     .exec()
//     .then((project) => {
//       if(!project) return res.notFound();
//       return project.remove();
//     })
//     .then(() => res.status(204).end())
//     .catch(next);
// }

module.exports = {
  index: projectsIndex,
  // create: projectsCreate,
  show: projectsShow
  // update: projectsUpdate,
  // delete: projectsDelete
};
