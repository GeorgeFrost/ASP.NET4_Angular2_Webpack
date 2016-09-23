using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Angular2_Webpack.Startup))]
namespace MVC_Angular2_Webpack
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
