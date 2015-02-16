#region Usings

using System.Web.Mvc;

#endregion

namespace Juvo.Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home

        #region Methods

        public ActionResult Index()
        {
            return View();
        }

        #endregion
    }
}