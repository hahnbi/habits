const Environment = {
  isDev():boolean {
    return ['dev', 'development'].includes(process.env.NODE_ENV || '');
  },

  isProd():boolean {
    return ['prod', 'production'].includes(process.env.NODE_ENV || '');
  },

  isTest():boolean {
    return ['test'].includes(process.env.NODE_ENV || '');
  },
}

export default Environment;
