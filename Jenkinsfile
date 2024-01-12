pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'chmod +x execute_compose.sh'
        sh 'pwd'
        sh 'ls -l'
        //sh 'docker-compose up -d -f ./docker-compose.yml'
        sh './execute_compose.sh'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker rm -f react_app_c'
        sh 'docker run -dp 0.0.0.0:5173:5173 --name react_app_c --network jenkins_default frontend__react-app'                
      }
    }
    stage('Test') {
      steps {
        sh 'ls'
        //sh 'docker exec -i django_app_c python manage.py test'
      }
    }
  }

  post {
    success {
        echo "Build successful"
        // You can add additional steps here, like running tests or notifications.
    }
    failure {
        echo "Build failed"
    }
  }
}