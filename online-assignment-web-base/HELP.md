# Read Me First
The following was discovered as part of building this project:

* The original package name 'com.elearning.online-assignment-web-base' is invalid and this project uses 'com.elearning.onlineassignment' instead.

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.4.1/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.4.1/maven-plugin/reference/html/#build-image)

RUN command
mvn clean install -Ponline-assignment-web-base -Dbuild.number=1.0.0 -Drelease.version=0.1 -Ddeploy.skip="true" -Dmaven.test.skip