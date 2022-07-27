import React from 'react'
import Textarea from './Textarea'
export default function AppDev() {
  const mystyle={
    margin:"74px 0px 20px 0px"
  }
  const sizec={
    // margin:"50px 50px 50px ,50px",
    // width:"1300px",
    height:"600px",
    border:"solid black 7px",
    // borderRadius:"300px"
  }
  return (
    <div style={mystyle}>
     <h4 className='text-center'>MultiScreen App</h4>

<div id="carouselExampleFade" className="carousel slide carousel-fade mt-4" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src="VGB/image/VGB.png" className="d-block w-100 " style={sizec} alt="This is the pic. of website"/>
    </div>
    
    <div className="carousel-item  ">
      <img src="VGB/image/VGB_2.png" className="d-block w-100 " style={sizec} alt="This is the pic. of website"/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div  className='text-center container mt-5'>
  <a style={{color:"red"}} href='VGB/android/VGB.apk'>Download</a>
<h3 >HOW TO MAKE THIS APP</h3>
<p>For make this type of App we need to learn  basic of java. We Should have a knowledge of android studio to make constraints and implemets the  code. <strong>AT last main part is java.</strong>By the help of simple programming idea like:-if-else,loop,onclick function help you to complete this App </p>
<strong>java code part  ( home page-calculator)</strong>
<div className='text-center container mt-5'>
<Textarea  h={"500px"}code={`  private Button b1;
private  double c,d=0,e;
    private Button b2;
    private Button b3;
    private Button b4;
    private Button b5;
    private Button b6;
    private Button b7;
    private Button b8;
    private Button b9;
    private Button b0;
    private Button bc;
    private Button back;
    private Button be;
    private Button ba;
    private Button bs;
    private Button bm;
    private Button bd;
    private  Button pi;
    private TextView textView2;
    private TextView textView;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        b0=findViewById(R.id.b0);
        b1=findViewById(R.id.b1);
        b2=findViewById(R.id.b2);
        b3=findViewById(R.id.b3);
        b4=findViewById(R.id.b4);
        b5=findViewById(R.id.b5);
        b6=findViewById(R.id.b6);
        b7=findViewById(R.id.b7);
        b8=findViewById(R.id.b8);
        b9=findViewById(R.id.b9);
        bc=findViewById(R.id.bc);
        be=findViewById(R.id.be);
        ba=findViewById(R.id.ba);
        bs=findViewById(R.id.bs);
        bm=findViewById(R.id.bm);
        bd=findViewById(R.id.bd);
        back=findViewById(R.id.back);
        textView2=findViewById(R.id.textView2);
        textView=findViewById(R.id.textView);
        pi=findViewById(R.id.pi);

        calculator(b0,0);
        calculator(b1,1);
        calculator(b2,2);
        calculator(b3,3);
        calculator(b4,4);calculator(b5,5);calculator(b6,6);
        calculator(b7,7);calculator(b8,8);calculator(b9,9);
        run(ba,1);run(bs,2);run(bm,3);run(bd,4);

        pi.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    c = Math.PI;
                    textView2.setText("" + c);
                }catch (Exception e){
                    Toast.makeText(MainActivity.this, "you are doing wrong calculation", Toast.LENGTH_SHORT).show();
                    c=0;
                    textView2.setText(""+c);
                }
            }
        });


        bc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                textView2.setText("");
                textView.setText("");
                c=0;
                d=0;
                e=0;
            }
        });

back.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View view) {

        if(c==0 ||c==1||c==2||c==3||c==4||c==4||c==5||c==6||c==7||c==8||c==9){
            textView2.setText("");
            c=0;
        }
        else{
            c = (int) (c / 10);
            textView2.setText(""+c);
        }
    }
});

        be.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
try{
    if(e==1){
        c=(d+c);
        textView2.setText(""+(c));
    }
    if(e==2){
        c=d-c;
        textView2.setText(""+(c));
    }
    if(e==3){
        c=d*c;
        textView2.setText(""+(c));
    }
    if(e==4){
        if(c==0){
            Toast.makeText(MainActivity.this, "infinity", Toast.LENGTH_SHORT).show();
        }
        else{
            c=d/c;
            textView2.setText(""+(c));
        }

    }
}catch (Exception e){
    textView2.setText("");
    c=0;
    d=0;
}


            }
        });

    }
    public void run(Button b,int f){

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    d = c;

                    e = f;
                    if (e == 1) textView.setText("+");
                    if (e == 2) textView.setText("-");
                    if (e == 3) textView.setText("X");
                    if (e == 4) textView.setText("%");
                    textView2.setText("");

                }catch (Exception e){
                    Toast.makeText(MainActivity.this, "please give accurate calculation", Toast.LENGTH_SHORT).show();
                    textView.setText("");
                }
            }
        });

    }
    public void calculator(Button b,int a){

      b.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
              try {
                  textView2.append("" + a);
                  String a = textView2.getText().toString();
                  c = Integer.parseInt(a);
              }catch (Exception e){
                  textView2.append("" + a);
                  Toast.makeText(MainActivity.this, "please give small value you are trying to harm the  calculator", Toast.LENGTH_SHORT).show();
              }
          }
      });


    }
`}/>
</div>
<strong>java code part  ( use in Rock-paper-app)</strong>
<div className='text-center container mt-5'>
<Textarea  h={"500px"}code={`  private Button button;
    private Button button2;
    private Button button3;
    private TextView computer;
    private  TextView user;
    private  TextView display;
    private EditText point;
    private Button button4;
    String arr[]={"R","P","S"};
    int a=0,com=0,user1=0,p=10;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button = findViewById(R.id.button);
        button2 = findViewById(R.id.button2);
        button3 = findViewById(R.id.button3);
        button4=findViewById(R.id.button4);
        computer = findViewById(R.id.computer);
        user = findViewById(R.id.user);
        display = findViewById(R.id.display);
        point=findViewById(R.id.point);
        button4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    p = 10;
                    String points = point.getText().toString();
                    p = Integer.parseInt(points);
                    if (p <= 0) {
                        Toast.makeText(MainActivity.this, " 0 is not possible so for this we set points as a 10 ", Toast.LENGTH_SHORT).show();
                        p = 10;
                    } else if (p > 0) {
                        Toast.makeText(MainActivity.this, "you set a:" + p + "points of game", Toast.LENGTH_SHORT).show();
                    } else {
                        Toast.makeText(MainActivity.this, "Please set good points , now we are set point 10 ", Toast.LENGTH_SHORT).show();
                        p = 10;
                    }
                }catch (Exception e){
                    Toast.makeText(MainActivity.this, "please set atleast some value", Toast.LENGTH_SHORT).show();
                p=10;
                }
            }
        });

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                a = 1;

                Random r = new Random();
                int b = r.nextInt(3);
                String n = arr[b];

                if ((n == "P" && a == 2) || (n == "S" && a == 3) || (n == "R" && a == 1)) {

                    display.setText("choice of coumpter is " + n + "\n Tie ");
                    computer.setText("" + com);
                    user.setText("" + user1);
                } else if ((n == "P" && a == 3) || (n == "S" && a == 1) || (n == "R" && a == 2)) {
                    user1++;

                    display.setText("choice of coumpter is " + n + "\n winner is user ");

                    computer.setText("" + com);
                    user.setText("" + user1);
                    if(user1>=p){
                        display.setText("\n winner is user It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                    if(com>=p){
                        display.setText("\n winner is Computer It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }

                } else {
                    com++;

                    display.setText("choice of coumpter is " + n + "\n winner is Computer");
                    computer.setText("" + com);
                    user.setText("" + user1);
                    if(user1>=p){
                        display.setText("\n winner is user It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                    if(com>=p){
                        display.setText("\n winner is Computer It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                }
            }

        });
        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                a = 2;

                Random r = new Random();
                int b = r.nextInt(3);
                String n = arr[b];

                if ((n == "P" && a == 2) || (n == "S" && a == 3) || (n == "R" && a == 1)) {

                    display.setText("choice of coumpter is " + n + "\n Tie ");
                    computer.setText("" + com);
                    user.setText("" + user1);
                } else if ((n == "P" && a == 3) || (n == "S" && a == 1) || (n == "R" && a == 2)) {
                    user1++;

                    display.setText("choice of coumpter is " + n + "\n winner is user ");

                    computer.setText("" + com);
                    user.setText("" + user1);
                    if(user1>=p){
                        display.setText("\n winner is user It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                    if(com>=p){
                        display.setText("\n winner is Computer It reach first"+ p+" point");
                        user1=0;
                        com=0;
                    }
                } else {
                    com++;

                    display.setText("choice of coumpter is " + n + "\n winner is Computer");
                    computer.setText("" + com);
                    user.setText("" + user1);
                    if(user1>=p){
                        display.setText("\n winner is user It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                    if(com>=p){
                        display.setText("\n winner is Computer It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                }
            }
        });
        button3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                a = 3;

                Random r = new Random();
                int b = r.nextInt(3);
                String n = arr[b];

                if ((n == "P" && a == 2) || (n == "S" && a == 3) || (n == "R" && a == 1)) {

                    display.setText("choice of coumpter is " + n + "\n Tie ");
                    computer.setText("" + com);
                    user.setText("" + user1);
                } else if ((n == "P" && a == 3) || (n == "S" && a == 1) || (n == "R" && a == 2)) {
                    user1++;

                    display.setText("choice of coumpter is " + n + "\n winner is user ");

                    computer.setText("" + com);
                    user.setText("" + user1);
                    if(user1>=p){
                        display.setText("\n winner is user It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                    if(com>=p){
                        display.setText("\n winner is Computer It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                } else {
                    com++;

                    display.setText("choice of coumpter is " + n + "\n winner is Computer");
                    computer.setText("" + com);
                    user.setText("" + user1);
                    if(user1>=p){
                        display.setText("\n winner is user It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                    if(com>=p){
                        display.setText("\n winner is Computer It reach first "+p+" point");
                        user1=0;
                        com=0;
                    }
                }

            }

        });
}
`}/>
</div>
</div>
</div>
  )
}

