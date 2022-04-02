

exports.htmlHomePage = (req, res, next) => {
    try {
        res.status(200).render('home', { name : "Atul" });
    } catch (e) { next(e) }
}

exports.htmlAboutPage = (req, res, next) => {
    try {
        res.status(200).render('about', { name : "Atul" });
    } catch (e) { next(e) }
}