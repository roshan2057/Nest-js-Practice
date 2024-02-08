import { Controller, Get, Param, Query } from "@nestjs/common";
import { SearchService } from "./search.service";

@Controller("search")
export class SearchController {
    constructor(
        private searchservice:SearchService
    ){}
    @Get()
    search(@Query('key') key:string):any{

return this.searchservice.Search(key);
    }
}