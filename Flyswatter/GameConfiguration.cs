using Microsoft.Extensions.Configuration;


namespace Flyswatter
{
    public static class GameConfiguration
    {
        public static string Edition => new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("AppSettings")["Edition"];
        public static string Title => Edition == "summer" ? "Flyswatter" : "Snowcatcher";
    }
}
