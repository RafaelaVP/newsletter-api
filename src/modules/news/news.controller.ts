import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateNewsUseCase } from './usecase/create-news.usecase';
import { FindNewsUseCase } from './usecase/find-news.usecase';
import { UpdateNewsUseCase } from './usecase/update-news.usecase';
import { DeleteNewsUseCase } from './usecase/delete-news.usecase';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(
    private readonly createNewsUseCase: CreateNewsUseCase,
    private readonly findNewsUseCase: FindNewsUseCase,
    private readonly updateNewsUseCase: UpdateNewsUseCase,
    private readonly deleteNewsUseCase: DeleteNewsUseCase,
  ) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.createNewsUseCase.execute(createNewsDto);
  }

  @Get()
  findAll() {
    return this.findNewsUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findNewsUseCase.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.updateNewsUseCase.update(id, updateNewsDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteNewsUseCase.delete(id);
  }
}
