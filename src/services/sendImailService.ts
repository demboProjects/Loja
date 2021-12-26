import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const html = `
    <table>
        <tr>
            <th>Nome</th>
            <th>email</th>
            <th>endereço</th>
        </tr>
        <tr>
            <td>José Dembo</td>
            <td>jose18@gmail.com</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Paulo Gunga</td>
            <td>paulo.12@outlook.com</td>
            <td>Mexico</td>
        </tr>
        <tr>
        <td>Mateus Zua</td>
        <td>mateuszua@outlook.com</td>
        <td>Angola</td>
    </tr>
    </table>
`

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: `${process.env.EMAIL_USER}`,
        pass: `${process.env.EMAIL_PASSWORD}`
    }
});

transporter.sendMail({
    from: `Pedro Dembo <${process.env.EMAIL_USER}>`,
    to: ["danielpedro519@gmail.com"],
    subject: "Trabalhando com o nodemailer",
    text: "Olá Eu sou o Pedro e estou trabalhano com o nodemailer",
    html: `${html}`

})
    .then(messsage => {
        console.log(messsage);
    })
    .catch(err => {
        console.log(err);
    });

