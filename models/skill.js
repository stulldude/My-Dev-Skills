let skills = [
    {id: 'JAVA', familiarity: 'high'},
    {id: 'PHP', familiarity: 'none'},
    {id: 'Node', familiarity: 'low'},
    {id: 'Javascript', familiarity: 'medium'},
]

module.exports = {
    getAll,
    getOne
}

function getOne(id) {
    return skills.find(el => id === el.id);
}
function getAll(req, res) {
    return skills;
}