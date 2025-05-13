pipeline {
    agent any

    tools {
        nodejs 'Node'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kareemprivategit/MTN.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx cypress run'
            }
        }

        stage('Allure Report') {
            steps {
                allure includeProperties: false, results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Build - ${currentBuild.currentResult}",
                body: """<p>Build result: ${currentBuild.currentResult}</p>
                         <p><a href="${BUILD_URL}allure">View Allure Report</a></p>""",
                to: "kareem.m.ebrahim@outlook.com",
                mimeType: 'text/html'
            )
        }
    }
}
