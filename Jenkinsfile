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
                sh 'npm install, npm run test'
            }
        }
        stage('Archiving test results') {
            steps {
                archiveArtifacts artifacts: '**/coverage/*.xml', followSymlinks: false 
            } 
        }
        
    }
}