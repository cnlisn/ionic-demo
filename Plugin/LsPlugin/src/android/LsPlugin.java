package com.lishan.helloworld;
import android.widget.Toast;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class LsPlugin extends CordovaPlugin {
    private CallbackContext callbackContext;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
        if (this.cordova.getActivity().isFinishing())
            return true;

        if (action.equals("FangFa1Method")) {

            
            //获取参数
            String message = args.getString(0);
            Toast.makeText(cordova.getActivity(), message + "00000", Toast.LENGTH_SHORT).show();
            callbackContext.success("人生如梦。。。。");
            return true;
        }
        else if (action.equals("func1")) {
            String message = args.getString(0);
            Toast.makeText(cordova.getActivity(), "func1传过来的值是："+message, Toast.LENGTH_SHORT).show();
            callbackContext.success("成功的调用了func1");
            return true;
        }
        else if (action.equals("func2")) {
            String message0 = args.getString(0);
            String message1 = args.getString(1);
            Toast.makeText(cordova.getActivity(), "func2传过来的值是："+message0+message1, Toast.LENGTH_SHORT).show();
            callbackContext.success("成功的调用了func2");
            return true;
        }
        else{
            callbackContext.error("错误的调用");
            return false;
        }
        
        // return false;
        // return super.execute(action, args, callbackContext);
    }

}
