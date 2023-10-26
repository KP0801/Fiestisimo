const bcrypt = require('bcryptjs');
const User = require('../models/customers');
const jwtUtils = require('../../utils/authToken');

//! Middleware para autenticacion de usuarios
exports.authenticateUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Buscar al usuario por su correo electrónico
      const user = await User.findOne({ where: { email } });
  
      // Mensaje de error
      if (!user) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
      }
  
      // Compara la contraseña 
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
      }
  
      // Generacion del token con información del usuario
      const payload = {
        userId: user.id,
        email: user.email,
        role: user.role, 
      };
      const expiresIn = '1h'; // 1 hora de expiración
      const token = jwtUtils.generateAuthToken(payload, expiresIn);

      // Enviamos el token como respuesta
      res.status(200).json({ message: 'Autenticación exitosa', token });
    } catch (error) {
      console.error('Error de autenticación:', error);
      res.status(500).json({ error: 'Error de autenticación' });
    }
  };
