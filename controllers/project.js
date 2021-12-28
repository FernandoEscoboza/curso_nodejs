
const Project = require("../models/project");

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'I am Home'
        });
    },
    
    test: function(req, res){
        return res.status(200).send({
            message:'I am Test'
        });
    },

    saveProject: function(req, res){
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;

        project.save((error, projectStored) => {
            if(error) return res.status(500).send({message:'Error al guardar el documento'});

            if(!projectStored) return res.status(404).send({message:'No se ha podido guardar el documento'});

            return res.status(200).send({message: projectStored});
        });

        // return res.status(200).send({
        //     project: project,
        //     message:"Metodo SaveProject"
        // });
    },

    getProject: function(req, res){
        let projectid = req.params.id;

        if(projectid == null  ) return res.status(404).send({message: 'Proyecto no existe'});

        Project.findById(projectid, (err, proj) =>{
            if(err) return res.status(500).send({message: 'Error a devolver los datos'});   

            if(pj) return res.status(404).send({message: 'Proyecto no existe'});

            return res.status(200).send({ proj });
        });
    },

    getProjectAll: function(req, res){
        // Project.find({}).sort('year').exec((err, proj) =>
        Project.find((err, proj) => {
            
            if(err) return res.status(404).send({ message: 'No existen proyectos'});

            return res.status(200).send({ proj});
        });
    },
    upProject: function (req, res) {
        let projectid = req.params.id;
        let up  = req.body;

        Project.findByIdAndUpdate( projectid, up, {new: true}, (err, projup)=>{
            if(err) return res.status(404).send({message: 'No se pudo actualizar'});

            if(!projup) res.status(404).send({message: 'No existe el proyecto'});

            return res.status(200).send({
                project: projup
            });
        });
    },

    deleteProject: function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndDelete(projectId, (err, projectRemoved)=>{
            if(err) return res.status(404).send({message: 'NO se ha borrado ningun registro'});

            if(!projectRemoved) return res.status(500).send({message: 'No se puede borrar'});

            return res.status(200).send({
                project: projectRemoved
            });
        });
    },

    uploadimage: function (req, res) {
        var projectId = req.params.id;
        var filename = 'Imagen no subida...';

        if(req.files){
            return res.status(200).send({
                files: req.files
            });
        }else{
            return res.status(404).send({
                files: filename
            });
        }
    }

}

module.exports = controller;