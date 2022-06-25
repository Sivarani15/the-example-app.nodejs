const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl : 'http://172.31.23.75:9000/',
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': '.',
      'sonar.login': 'admin',
      'sonar.password': 'sonar',
      //'sonar.tests': 'specs',
      'sonar.language' : 'js',
      'sonar.projectVersion': '1.0'
    },
  },
  () => process.exit()
);