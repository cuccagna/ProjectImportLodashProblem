const pathM = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/* const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: {
      home: './src/js/index.js',
      ananas: './src/js/ananasEntryPoint.js'},
   output: {
      filename: 'js/[name].[contenthash].js',
      path: pathM.resolve(__dirname, './dist'),
      assetModuleFilename: '[path][name][ext]', 
      publicPath: './',
      clean: true /* {
         dry: false,
         keep:/\.css$/ 
      } */   //Serve per cancellare la cartella dist dalla precedente esecuzione
   },
   mode: 'development',
   devServer: {
      port: 9000,
      static: {
         directory:pathM.resolve(__dirname, './dist')
      },
      devMiddleware: {
         index: 'index.html',
         writeToDisk:true
      }
   },
   /* watch:true, */
   module: {
      rules:[
         {
            test: /\.(png|jpe?g|webp|avif|gif|svg)$/,
            type: 'asset',
            parser: {
               dataUrlCondition: {
                  maxSize: 3 * 1024 //3 Kilobytes QUI CAMBIA LA SOGLIA A 3 KByte
                 /*  Il logo Angular è 6, 5 Kbyte.Cambia la soglia per includere
                  nel bundle js il logo */
               }
            }
         },
         /*rules per quando provi ad importare un file css da javascript. Uso due loaders
         css-loader  legge il contenuto del css e ritorna il contenuto
         style-loader prende il css e lo mette nella pagina, mette il css proprio nel
                      bundle.js Poi vedremo come generarli come file separati
         */
         {
            test: /\.css$/,
            use: ['style-loader','css-loader'] 
         },
         {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader'] 
         }
      ]
   },
   plugins: [
      new CopyWebpackPlugin({
         patterns: [
            { from: './assets/img', to: './assets/img' }
         ]
      }),
      new HtmlWebpackPlugin({
        
         inject: 'head',
         chunks: ['home'],
         template: "./index.ejs", //Puoi mettere anche un file html
         filename: "./index.html",
          
         /* minify:true  */
      }),
      new HtmlWebpackPlugin({
        
         inject: 'head',
         chunks: ['ananas'],
         template: "./ananas.ejs", //Puoi mettere anche un file html
         filename:"./ananas.html",
         /* minify:true  */
      })
      /*Nella seguente configurazione di questo plugin eliminiamo tutti i file
      e le cartelle e sottocartelle a partire dalla cartella .dist che è quella
      specificata in ouput.path
      asteriscoasterisco/asterisco  vuol dire tutti i file e le sottocartelle
      Inoltre specifico di ripulire anche tutti i file e le sottocartelle 
      dentro la cartella nomeCartella
      Nota che devo fornire un percorso assoluto perchè di default parte
      da ./dist (impostata in output.path)
      */
      //new CleanWebpackPlugin({
        // cleanOnceBeforeBuildPatterns: [
          //  '**/*',
           // path.join(process.cwd(),'nomeCartella/**/*')
      //]
   //})
   ]

}