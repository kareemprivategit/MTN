pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh './node_modules/.bin/cypress run'
            }
        }
    }
}
