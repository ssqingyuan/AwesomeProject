package com.awesomeproject;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

public class SqyRnActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(createView());
    }
    private View createView() {
        LinearLayout ll= new LinearLayout(this);
        ll.setGravity(Gravity.CENTER);
        ll.setLayoutParams(new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        // 设置文字
        TextView mTextView = new TextView(this);
        mTextView.setText("hello world");
        LinearLayout.LayoutParams mLayoutParams = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        // 在父类布局中添加它，及布局样式
        ll.addView(mTextView, mLayoutParams);
        return ll;
    }

}
