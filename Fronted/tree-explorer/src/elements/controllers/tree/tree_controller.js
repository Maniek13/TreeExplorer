import POST from '../http/post'
import GET from '../http/get'
import Responde from '../http/objects/responde'
import Element from "../../tree/objects/element"
import List from '../../tree/objects/list'


class TreeController{

    static async get_tree(){
        await GET("https://localhost:5001/Elements/Show");

        if(Responde.data !== "server error"){
            List.tree = Responde.data;
        }
        else{
            Responde.code = 200;
            Responde.data = Responde.data.error;
        }

        return true;
    }
    
    static async add_tree_element(){
        await POST("https://localhost:5001/Elements/Add", Element.element);
    }

    static async delete(id){
        await POST("https://localhost:5001/Elements/Delete", {Id : id});
    }

    static async edit(){
        await POST("https://localhost:5001/Elements/Edit", Element.element);
    }

    static async sort_brand(id, type){
        await POST("https://localhost:5001/Elements/Sort", {Id : id, Type : type});
        if(Responde.data !== "server error"){
            List.tree = Responde.data;
            Responde.data = true;
        }
        else{
            Responde.code = 200;
            Responde.data = Responde.data.error;
        }
    }
}

export default TreeController;