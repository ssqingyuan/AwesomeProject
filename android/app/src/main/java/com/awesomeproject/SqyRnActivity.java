package com.awesomeproject;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

public class SqyRnActivity extends AppCompatActivity implements View.OnClickListener {

    private Button button;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sqy_rn);
        button = findViewById(R.id.btn_submit);
        button.setOnClickListener(this);
    }

    @Override
    public void onClick(View view){
        switch(view.getId()){
            case R.id.btn_submit:
            onClickButton(view);
            break;
            default:
                break;
        }
    }
    private void onClickButton(View view) {
        //处理逻辑
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("提示");
        builder.setIcon(R.mipmap.ic_launcher_round);
        builder.setMessage("确定提交吗？");
        builder.setPositiveButton("确定", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getBaseContext(), "提交成功", Toast.LENGTH_SHORT).show();
            }
        });
        builder.setNegativeButton("取消", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getBaseContext(), "未提交成功", Toast.LENGTH_SHORT).show();
            }
        });
        //builder.setCancelable(true);  点击对话框之外的地方对话框就消失
        builder.setCancelable(true);
        AlertDialog alertDialog = builder.create();
        alertDialog.show();

    }


}
