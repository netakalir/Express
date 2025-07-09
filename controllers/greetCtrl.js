export function getGreet() {
    router.get("/greet", (req, res) => {
        res.json({ msg: "hello from/greet!" });
    });
}