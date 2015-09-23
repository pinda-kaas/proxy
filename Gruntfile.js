module.exports = function (grunt) {

    var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    keepalive: true,
                    open: true,
                    middleware: function (connect, options) {
                        return [proxySnippet];
                    }
                },
                proxies: [{
                    context: '/bef',
                    host: 'bing.com',
                    port: 80
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'configureProxies:server',
        'connect:server']);

};