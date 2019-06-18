module.exports = function(grunt){
    grunt.initConfig({
        // pass in options
        concat:{
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'
            }
        }
    });
    
      grunt.loadNpmTasks('grunt-contrib-concat')


    //   register tasks
      grunt.registerTask("run",function () {
          console.log("i am running")
      })
      grunt.registerTask("sleep",function () {
        console.log("i am sleeping")
    })
    grunt.registerTask("all",['sleep','run'])
}