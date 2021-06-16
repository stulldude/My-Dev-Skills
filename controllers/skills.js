let Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { skills });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function deleteSkill(req, res) {
    const skills = Skill.deleteOne();
    res.render('skills/show', { skills })
}

function create(req, res) {
    
}
