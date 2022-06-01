pipeline {
    agent {
        label 'JAVA11'
    }
    stages {
        stage('Sourcecode'){
            steps {
            git branch: 'declarative', url: 'https://github.com/Sivarani15/js-e2e-express-server.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Sonarqube analysis') {
            steps {
                withSonarQubeEnv('SONAR_LATEST') {
                    sh 'npm run build sonar:sonar'
                }                
            }
        }
        stage('Archiving test results') {
            steps {
                archiveArtifacts artifacts: '**/coverage/*.xml', followSymlinks: false 
            } 
        }
        
    }
}