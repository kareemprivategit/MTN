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
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
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
                subject: "Build - ${BUILD_STATUS}",
                body: """<p>Build result: ${BUILD_STATUS}</p>
                         <p><a href="${BUILD_URL}allure">View Allure Report</a></p>""",
                to: "kareem.m.ebrahim@outlook.com",
                mimeType: 'text/html'
            )
        }
    }
}
