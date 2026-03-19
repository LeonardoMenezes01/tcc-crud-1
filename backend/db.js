const mysql = require('mysql2');

// Configuração da conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Seu usuário do MySQL
    password: '',       // Sua senha do MySQL (deixe vazio se for XAMPP padrão)
    database: 'registros' // O nome do banco que você criou
});

// Verificação de conexão
connection.connect((err) => {
    if (err) {
        console.error('❌ Erro ao conectar ao MySQL:', err.message);
        return;
    }
    console.log('✅ Conexão com o banco de dados estabelecida!');
});

// Exporta a conexão para ser usada no server.js
module.exports = connection;