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
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Archiving the Project') {
            steps {
                sh 'npm run pack'
            }
        }

        stage('Sonarqube analysis') {
            steps {
                sh 'npm run sonar'                
            }
        }
        // stage('Archiving test results') {
        //     steps {
        //         archiveArtifacts artifacts: '**/coverage/*.xml', followSymlinks: false 
        //     } 
        // }
        
    }
}