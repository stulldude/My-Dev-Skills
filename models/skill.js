let skills = [
    {id: 'JAVA', familiarity: 'high', years: '1.5'},
    {id: 'PHP', familiarity: 'none', years: '0.0'},
    {id: 'Node', familiarity: 'low', years: '0.5'},
    {id: 'Javascript', familiarity: 'medium', years: '0.5'},
]

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
}

function create(newSkill) {

    skills.push(newSkill);
}

function getOne(id) {
    return skills.find(el => id === el.id);
}
function getAll(req, res) {
    return skills;
}

function deleteOne(id) {
    skills = skills.filter(el => el.id != id);
    return skills;
}