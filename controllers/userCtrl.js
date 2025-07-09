let users = [{ id: 1, name: "neta" }];

export function getAllUsers(req, res) {
    res.json({ msg: "all users", users });
}

export function getUserById(req, res) {
    const userId = parseInt(req.params.id)
    const user = users.find(u => u.id === userId)
    if (user) {
        res.json(user)
    }
    else {
        res.status(404).json({ msg: "user not found" })
    }
}

export function createUser(req, res) {
    const newUser = { id: Date.now(), name: req.body.name };
    users.push(newUser);
    console.log(users);
    res.status(201).json("new user added ", + newUser);
}

export function updatedUser(req, res) {
    const userId = parseInt(req.params.id)
    const user = users.find(u => u.id === userId)
    if (user) {
        const { name } = req.body;//השם החדש שהגיע בבקשה
        user.name = name || user.name;//אם לא התקבל שם חדש אז משאירים את השם הקודם
        res.json({ msg: "user updated", user })
    }
    else {
        res.status(404).json({ msg: "user not found" })
    }
}

export function deleteUser(req, res) {
    const userId = parseInt(req.params.id)
    const userIndex = users.findIndex(u => u.id === userId)
    if (userIndex !== -1) {
        users.splice(userIndex, 1)
        res.json({ msg: "User deleted successfully" })

    }
    else {
        res.status(404).json({ msg: "user not found" })
    }
}