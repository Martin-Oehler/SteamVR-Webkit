using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Valve.VR;


namespace SteamVR_WebKit.JsInterop
{
    public class Keyboard
    {
        private Overlay _overlay;

        public Keyboard(Overlay overlay)
        {
            _overlay = overlay;
        }

        public void ShowKeyboard(string existingText)
        {
            //SteamVR.instance.overlay.ShowKeyboard(0, 0, "Enter text", 256, existingText, false, 0);
            OpenVR.Overlay.ShowKeyboardForOverlay(_overlay.Handle, 0, 0, "Enter text", 256, existingText, false, 0);
        }
    }
}
