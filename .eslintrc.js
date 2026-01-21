module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'script', // Para CommonJS
  },
  rules: {
    // Erros que você teve
    'no-undef': 'error',           // Variável não definida
    'no-unused-vars': 'warn',      // Variável não usada
    'no-unreachable': 'error',     // Código inalcançável
    
    // Boas práticas
    'no-console': 'off',           // Permite console.log (útil para debug)
    'eqeqeq': ['error', 'always'], // Força === ao invés de ==
    'curly': ['error', 'all'],     // Força chaves {} sempre
    
    // Async/Await
    'require-await': 'warn',       // Avisa se função async não tem await
    'no-async-promise-executor': 'error',
  },
};
